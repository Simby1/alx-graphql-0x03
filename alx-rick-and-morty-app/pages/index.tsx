import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome to the Rick and Morty App</h1>
      <p>The content below is protected by an Error Boundary:</p>
      
      <hr />
      
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;