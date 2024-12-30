
export default function DashboardServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
