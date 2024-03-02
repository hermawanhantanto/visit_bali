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

export interface CreateArtikelParams {
  judul: string;
  deskripsi: string;
  gambar: string;
  penulis: string;
}

export interface GetAllArtikelParams {
  page?: number;
  filter?: string;
  q?: string;
}

export interface UpvoteArtikelParams {
  artikelId: string;
  userId: string;
  path: string;
}

export interface ViewArtikelParams {
  artikelId: string;
}

export interface CreateKomentarParams {
  komentar: string;
  artikelId: string;
  userId: string;
  path: string;
}