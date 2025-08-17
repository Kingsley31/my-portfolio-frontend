


export function AboutContent({children}: Readonly<{
  children: React.ReactNode;
}>) {
    return (<div className="flex flex-col md:flex-row gap-4 md:gap-20 items-start md:items-center justify-center md:justify-start w-full h-full">
        {children}
    </div>);
}