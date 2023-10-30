export const SUCCESS_RESPONSE_HANDLERS = {
  deleted_book: 'Book record deleted Sucessfully.',
  updated_book: 'Book record updated Sucessfully.',
  created_book: 'Book record created Sucessfully.',
  fetched_book: 'Book record for given id fetched Successfully.',
  fetched_all_books: 'All book records fetched Successfully',
};

export const ERROR_RESPONSE_HANDLERS = {
  invalid_id: 'The provided id is invalid.',
  book_does_not_exist: 'The record for the provided book id does not exist.',
  author_does_not_exist:
    'The record for the provided author id does not exist.',
};
