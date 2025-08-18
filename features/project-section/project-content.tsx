export function ProjectContent({children}: Readonly<{
  children: React.ReactNode;
}>) {
    return (<div className="flex flex-col gap-2 items-center justify-center h-full pt-10 md:pt-0">
        {children}
    </div>);
}