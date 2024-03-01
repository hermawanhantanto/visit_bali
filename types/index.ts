export interface GetAllDestinationParams {
  page?: number;
  filter?: string;
  q?: string;
}

export interface GetDestinationByIdParams {
  id: string;
}

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  password?: string;
  email: string;
  picture: string;
}