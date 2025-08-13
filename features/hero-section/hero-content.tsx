export function HeroContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center h-full md:h-9/10 justify-between md:justify-between">
            {children}
        </div>
    );
}