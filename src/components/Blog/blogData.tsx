import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Paradoxie",
      image: "/images/blog/author-01.png",
      designation: "欢迎体验",
    },
    tags: ["教程"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Paradoxie",
      image: "/images/blog/author-01.png",
      designation: "欢迎体验",
    },
    tags: ["教程"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Paradoxie",
      image: "/images/blog/author-01.png",
      designation: "欢迎体验",
    },
    tags: ["教程"],
    publishDate: "2024",
  },
];
export default blogData;
