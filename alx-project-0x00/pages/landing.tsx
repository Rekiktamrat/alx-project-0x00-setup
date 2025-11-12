import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-semibold">Landing Page</h1>

      <div className="flex flex-wrap gap-4">
        {/* Small Buttons */}
        <Button title="Small Rounded" style="text-sm rounded-sm" />
        <Button title="Small Medium" style="text-sm rounded-md" />
        <Button title="Small Full" style="text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded" style="text-base rounded-sm" />
        <Button title="Medium Medium" style="text-base rounded-md" />
        <Button title="Medium Full" style="text-base rounded-full" />

        {/* Large Buttons */}
        <Button title="Large Rounded" style="text-lg rounded-sm px-6 py-3" />
        <Button title="Large Medium" style="text-lg rounded-md px-6 py-3" />
        <Button title="Large Full" style="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;
