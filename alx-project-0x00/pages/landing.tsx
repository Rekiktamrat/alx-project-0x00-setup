import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-semibold">Landing Page</h1>

      <div className="flex flex-wrap gap-4">
        {/* Small Buttons */}
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Small Medium" styles="text-sm rounded-md" />
        <Button title="Small Large" styles="text-sm rounded-lg" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded" styles="text-base rounded-sm" />
        <Button title="Medium Medium" styles="text-base rounded-md" />
        <Button title="Medium Large" styles="text-base rounded-lg" />

        {/* Large Buttons */}
        <Button title="Large Rounded" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large Medium" styles="text-lg rounded-md px-6 py-3" />
        <Button title="Large Large" styles="text-lg rounded-lg px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;
