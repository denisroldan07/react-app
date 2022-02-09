export default function ItemDetail({ item }){
    return (
        <div key={item.id}>
            <img src={item.imagen} alt="Imagen"></img>
            <p>nombre : {item.nombre}</p>
            <p>precio : {item.precio}</p>
        </div>
    );
}