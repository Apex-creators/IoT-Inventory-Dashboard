
let users = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password.' });
    }

    const existing = users.find(user => user.email === email);
    if (existing) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    const newUser = { email, password };
    users.push(newUser);
    res.status(200).json({ message: 'Signup successful.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
