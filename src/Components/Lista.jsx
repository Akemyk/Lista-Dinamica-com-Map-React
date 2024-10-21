function Lista ({nomes}){
    return (
        <ul>
          {nomes.map((nome) => (
            <li key={nome}>{nome}</li>
          ))}
        </ul>
      );
    }
export default Lista