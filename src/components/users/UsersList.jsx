import { UserCard } from "./UserCard.jsx";

export const UsersList = ({ usuarios }) => {
    console.log(usuarios);

    return (
        <ul>
            {usuarios.map((usuario) => (
                <UserCard key={usuario.id} usuario={usuario} />
            ))}
        </ul>
    );
};
