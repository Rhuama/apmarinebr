import axios from 'axios';

const baseURL = 'https://graph.instagram.com';
const accessToken = process.env.BEARER_TOKEN;
const fields = 'id,media_type,media_url,permalink,thumbnail_url,timestamp';

export async function getInstagramPostDetails(postId: string) {
  try {
    const response = await axios.get(`${baseURL}/${postId}`, {
      params: {
        fields: fields,
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
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
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
    const postIds = response.data.data.map((post: any) => post.id);
    const postsDetails = await getAllInstagramPostsDetails(postIds);
    console.log(response.data, 'aqui')
    return postsDetails;
  } catch (error) {
    console.error('Erro ao obter posts do Instagram:', error);
    throw error;
  }
}
