export default function Item({item}){
    return (
        <div key={item.id}>
            <p>{item.nombre}</p>
        </div>
    );
}