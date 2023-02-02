/*
필수 요구사항
아래의 Todo 앱 요구사항을 참고하여
필요한 데이터를 모두 모델링한다.
사용되는 모든 함수를 선언부만 만든다.
함수 및 클래스의 내부는 구현하지 않습니다.
JSDoc을 활용해 문서화한다.
GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}

*/

/**
 * @description 할 일 추가하기
 * @param {string} title
 * @param {string || null} content
 * @param {string} category
 * @param {boolean} whether
 * @param {string || null} tag
 * @returns {number} post_id
 */
const CreatePost = (title, content, category, whether, tag) => {};

/**
 * @description 모든 할 일 조회하기
 * @returns {object[]} all_posts
 */
const GetAllPosts = () => {};

/**
 * @description 특정 할 일 조회하기
 * @param {number} post_id
 * @returns {object[]} particular_posts
 */
const GetParticularPosts = (post_id) => {};

/**
 * @description 할 일 수정하기
 * @returns {object} posts[post_id]
 * @param {number} post_id
 * @param {string} title
 * @param {string || null} content
 * @param {string} category
 * @param {boolean} whether
 * @param {string || null} tag
 */
const PatchPost = (post_id, title, content, category, whether, tag) => {};

/**
 * @description 특정 할 일의 특정 태그 수정하기
 * @returns {object} particular_posts[post_id]
 * @param {number} post_id
 * @param {string} tag
 */
const PatchParticularPostTag = (post_id, tag) => {};

/**
 * @description ID 기반 할 일 삭제
 * @param {number} post_id
 */
const DeletePost = (post_id) => {};

/**
 * @description 모든 할 일 제거
 * @param {object[]} all_posts
 */
const DeleteAllPosts = (all_posts) => {};

/**
 * @description 특정 할 일 특정 태그 제거
 * @param {number} particular_posts[post_id]
 * @param {string} tag
 */
const DeleteParticularPostTag = (post_id, tag) => {};

/**
 * @description 특정 할 일 모든 태그 제거
 * @param {number} particular_posts[post_id]
 * @param {string[]} tag
 */
const DeleteParticularAllTag = (post_id, tag) => {};
