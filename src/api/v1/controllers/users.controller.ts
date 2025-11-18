import { Request, Response } from 'express';

const dummyUsers = [
  { id: 1, name: "sam", email: "sam@example.com" },
  { id: 2, name: "reetwig", email: "reetwig@example.com" }
];

export const getUsers = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: dummyUsers
  });
};

export const getUserById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = dummyUsers.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  res.status(200).json({
    success: true,
    data: user
  });
};
