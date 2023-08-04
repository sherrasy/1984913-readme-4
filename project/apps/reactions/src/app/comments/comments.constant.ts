export const CommentsError = {
  PublicationNotFound : 'Publication is not found',
  WrongUser: "User id isn't the same as the author of comment"
} as const;

export const  API_TAG_NAME ='comments'

export const CommentsMessages = {
  Add : "Comment added successfully",
  Show: "All comments are shown",
  Remove: "Comment removed"
} as const;

export const DEFAULT_COMMENTS_AMOUNT = 50;

export const CommentTextLength = {
  Min: 10,
  Max: 300,
};

export const CommentsPath = {
  Main:'comments',
  Add:'add',
  PostId: ':postId',
  Delete:'delete/:postId/:commentId'
}as const;
