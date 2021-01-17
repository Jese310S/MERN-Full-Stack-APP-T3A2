import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem =({  auth, post: { _id, text, firstname, avatar, user, likes, comments, date }
}) => (
        <div class="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img class="round-img" src={avatar} alt=""/>
              <h4>{firstname}</h4>
            </Link>
          </div>
          <div>
            <p class="my-1">
             {text}
            </p>
             <p class="post-date">
                Posted on <Moment fromat='YYYY/MM/DD'>{date}</Moment>
            </p>
            <button type="button" class="btn btn-light">
              <i class="fas fa-thumbs-up"></i>
              <span>{likes.length}</span>
            </button>
            <button type="button" class="btn btn-light">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} class="btn btn-primary">
              Discussion {' '} 
              {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
            </Link>
            {!auth.loading && user === auth.user._id && (
            <button type="button" className="btn btn-danger">
              <i className="fas fa-times" />
            </button>
          )}
          </div>
        </div>
)

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {})(
    PostItem
  );
