export const teste = () => {
    return(
        <div>
           <p className="bg-secondary">asdadasdasd</p>
            {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-amber-800 m-5 min-h-16">main</div>
        ))}
        </div>
    )
} 
export default teste;