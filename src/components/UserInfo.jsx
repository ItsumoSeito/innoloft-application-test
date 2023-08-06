import React from 'react';
import PropTypes from 'prop-types';

function UserInfo(props) {
  var { name, company, imageUrl } = props;

  return (
    <span className="flex justify-start gap-5 items-center">
      <img
        src={imageUrl}
        className="basis-14 h-14 rounded-full"
        alt="User profile"
      />
      <div className="flex flex-col items-start justify-center">
        <p className="text-md font-bold text-start">{name}</p>
        <p className="text-sm text-start">{company}</p>
      </div>
    </span>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default UserInfo;
