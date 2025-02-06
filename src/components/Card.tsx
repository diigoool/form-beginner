interface UserCardProps {
  username: string;
  email: string;
  age: number;
}

const Card = ({ username, email, age }: UserCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{username}</h3>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{`Age: ${age}`}</p>
    </div>
  );
};

export default Card;
