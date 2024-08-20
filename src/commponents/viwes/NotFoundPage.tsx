import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>抱歉，您访问的页面不存在。</p>
      <p>您可以尝试以下操作：</p>
      <ul>
        <li>检查URL是否正确</li>
        <li>返回上一页</li>
        <li>访问主页</li>
      </ul>
    </div>
  );
};

export default NotFoundPage;
