import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "忘记签到 APP使用教程",
    paragraph:
      "介绍一些产品设计和操作逻辑，帮您快速发车上路",
    image: "/images/blog/blog-03.jpg",
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
    title: "忘记签到 APP使用体验分享",
    paragraph:
      " ",
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
    title: "忘记签到 APP产品简介",
    paragraph:
      "说说为什么做了这个产品，以及后续的产品思路",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Paradoxie",
      image: "/images/blog/author-01.png",
      designation: "欢迎体验",
    },
    tags: ["简介"],
    publishDate: "2024",
  },
];
export default blogData;
