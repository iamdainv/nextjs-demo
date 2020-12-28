import { useEffect } from 'react';
import { useRouter } from 'next/router';
const MessageComponent = ({ props }) => {
	const router = useRouter();
	console.log(router, 1);
	useEffect(() => {
		// Always do navigations after the first render
		// router.push('/?counter=10', undefined, { shallow: true });
	}, []);

	return <div>hello my name is dai nguyenn</div>;
};

// export async function getStaticProps({ params }) {
// 	// params contains the post `id`.
// 	// If the route is like /posts/1, then params.id is 1
// 	// const res = await fetch(`https://.../posts/${params.id}`);
// 	// const post = await res.json();
// 	console.log(params);

// 	// Pass post data to the page via props
// 	return { props: { params } };
// }

export default MessageComponent;
