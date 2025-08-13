export function HeroContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between mt-0 md:mt-10">
            {children}
        </div>
    );
}