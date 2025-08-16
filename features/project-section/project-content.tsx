export function ProjectContent({children}: Readonly<{
  children: React.ReactNode;
}>) {
    return (<div className="flex flex-col gap-2 items-center h-full pt-20 md:pt-30">
        {children}
    </div>);
}