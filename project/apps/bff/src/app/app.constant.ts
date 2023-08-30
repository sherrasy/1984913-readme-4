export const  API_TAG_NAME ='authentication'

export const AuthPath = {
  Register:'register',
  Login:'login',
  Id:':id',
  Refresh:'refresh',
  Check:'check',
  ChangePassword:'change-password'
}as const;

export const CommentsPath = {
  Add:'add',
  PostId: ':postId',
  Delete:'delete/:commentId'
}as const;

export const BlogListPath = {
  Main: 'blog-list',
  Id: ':id',
  Drafts: 'drafts',
  Search: 'search',
  SendNewsletter: 'send-news',
} as const;

export const UserNameLength = {
  Min: 3,
  Max: 50,
};

export const UserPasswordLength = {
  Min: 6,
  Max: 12,
};

export const AuthError = {
  UserExists: 'User with this email already exists',
  NotFound : 'User is not found',
  PasswordWrong : 'Password is wrong',
  InvalidData: 'Data is invalid',
  InvalidEmail:'Email is invalid'
} as const;
