import React, { useContext } from 'react';
import UserContext from '../../utils/userContext';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

function Like({ mov }) {
	const context = useContext(UserContext);
	return (
		<div onClick={() => context.handleLike(mov)} className='like'>
			{mov.liked === true ? <AiTwotoneLike /> : <AiOutlineLike />}
		</div>
	);
}

export default Like;
