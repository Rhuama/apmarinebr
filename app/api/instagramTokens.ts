import axios from 'axios';

const baseURL = 'https://graph.instagram.com';
const accessToken = 'IGQWRQNTE4ZAXkxMjl1eDE5dmNqSElpMHdJWU9oSjhXX0hLZAWVIU180ZAWZAVM0NJXzNWYS1URVljVUhyYi1aVUhfR3U0ZATEzVzV2NlFtQ3FwXzlsNjVnVW9XU0ZAPQmJqb3JKcWF6RXdBLUxGUQZDZD';
const fields = 'id,media_type,media_url,permalink,thumbnail_url,timestamp';

export async function getInstagramPostDetails(postId: string) {
  try {
    const response = await axios.get(`${baseURL}/${postId}`, {
      params: {
        fields: fields,
        access_token: accessToken
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes da postagem do Instagram:', error);
    throw error;
  }
}

export async function getAllInstagramPostsDetails(postIds: string[]) {
  try {
    const postsDetails = await Promise.all(postIds.map(id => getInstagramPostDetails(id)));
    return postsDetails;
  } catch (error) {
    console.error('Erro ao obter detalhes das postagens do Instagram:', error);
    throw error;
  }
}

export async function getInstagramPosts() {
  try {
    const response = await axios.get(`${baseURL}/me/media`, {
      params: {
        fields: 'id',
        access_token: accessToken
      }
    });
    const postIds = response.data.data.map((post: any) => post.id);
    const postsDetails = await getAllInstagramPostsDetails(postIds);
    return postsDetails;
  } catch (error) {
    console.error('Erro ao obter posts do Instagram:', error);
    throw error;
  }
}
