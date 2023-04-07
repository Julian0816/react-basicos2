import React, {useState, useEffect} from "react";

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
      console.log("Moviendo el scroll");

      const detectarScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", detectarScroll);

      return () => {
        window.removeEventListener("scroll", detectarScroll);
        console.log("Fase de Desmontaje")
      }
    }, [scrollY]);

    useEffect(() => {
        console.log("Fase de Montaje")
    },[])

    useEffect(() => {
        console.log("Fase de Actualizacion")
    })

    useEffect(() => {
        return () => {
            console.log("Fase de Desmontaje")

        }
    })

    return(
        <>
        <h2>Hooks - useEffect y el Ciclo de vida</h2>
        <p>Scrol Y del Navegador {scrollY}px</p>
        </>
    )
}