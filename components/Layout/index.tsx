import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return <div>{props.children}</div>;
}

export default Layout;
