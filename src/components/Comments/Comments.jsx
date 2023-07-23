import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
// import { comments } from '../../helpers/comments';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { useGetAllCommentsQuery } from "../../redux/commentApi";


export const Comments = () => {
  const { data:comments } = useGetAllCommentsQuery();
  const filter = useSelector(getFilter);
  const getFilterComments = () => {
    if(!filter) return comments;
    return comments.filter(comment => comment.content.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <Grid>
      {comments &&
        getFilterComments().map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
