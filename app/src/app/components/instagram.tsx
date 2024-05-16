"use client"
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getInstagramPosts } from '../../../api/instagramTokens';
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "./styles/instagram.css";

interface InstagramPost {
  id: string;
  media_url: string;
  caption: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsData = await getInstagramPosts();
        setPosts(postsData.map((post: any) => ({
          id: post.id,
          media_url: post.media_url,
          caption: post.caption,
        })));
      } catch (error) {
        console.error('Erro ao carregar os posts do Instagram:', error);
      }
    }
    loadPosts();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper mb-9"
        id="news"
      >
        {posts.map(post => (
          <SwiperSlide key={post.id}>
            <a href={post.media_url}>
              <Image src={post.media_url} alt={post.caption} width={50} height={50} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
