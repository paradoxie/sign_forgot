import SingleBlog from '@/components/Blog/SingleBlog';
import blogData from '@/components/Blog/blogData';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '教程分享 | 忘记签到',
  description: '让签到变得简单而高效，释放您的记忆力，优化您的时间管理',
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="教程分享"
        description="探索签到管理的更多妙招！在这里，我们分享签到技巧、使用心得以及高效管理任务的实用方法，让你充分发挥【忘记签到】的潜能。"
        content1="如何通过【忘记签到】提升效率？"
        content2="掌握正确的操作方法，将日常签到从繁琐变为简单。"
        content3="高效管理签到任务的5个建议"
        content4="实用技巧分享，帮助你最大限度优化签到流程。"
        content5=""
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;
