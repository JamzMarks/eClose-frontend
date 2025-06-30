export const teste = () => {
    return(
        <div>
            teste
            {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-amber-800 m-5 min-h-72">main</div>
        ))}
        </div>
    )
} 
export default teste;