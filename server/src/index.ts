import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
const port = 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
});
app.use(limiter);

interface UsernameRequestBody {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  favoriteFruit: string;
}

interface ErrorWithStatus extends Error {
  status?: number;
}

app.post('/generateUsername', (req: Request<{}, {}, UsernameRequestBody>, res: Response) => {
  try {
    const { firstName, lastName, dateOfBirth, favoriteFruit } = req.body;

    if (!firstName || !lastName || !dateOfBirth || !favoriteFruit) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if(!/^[a-zA-Z ]+$/.test(firstName) 
      || !/^[a-zA-Z ]+$/.test(lastName) 
      || !/^[a-zA-Z]+$/.test(favoriteFruit)
    ){
      return res.status(400).json({ error: 'Invalid input format.' });
    }

    const date = new Date(dateOfBirth);
    if (isNaN(date.getTime())) {
      return res.status(400).json({ error: 'Invalid date format.' });
    }

    const first = firstName.split(' ').join('_').toLocaleLowerCase();
    const last = lastName.split(' ').join('_').toLocaleLowerCase();
    
    const yearOfBirth = date.getFullYear();
    const username = `${first}_${last}_${favoriteFruit.toLowerCase()}${yearOfBirth}`;

    res.json({ username });
  } catch (error) {
    console.error('Error generating username:', error);
    res.status(500).json({ error: 'An error occurred while generating the username.' });
  }
});


app.use((err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({ error: 'Internal server error.' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
