export function ProjectContent({children}: Readonly<{
  children: React.ReactNode;
}>) {
    return (<div className="flex flex-col gap-2 items-center h-full p-30 md:p-30">
        {children}
    </div>);
}