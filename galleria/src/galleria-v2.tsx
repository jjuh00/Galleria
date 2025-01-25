import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"; 

const kuvat: {src: string; alt: string}[] = [
    { src: "./kuva_1.jpg", alt: "Kuva täysikuusta" },
    { src: "./kuva_2.jpg", alt: "Kuva auringonlaskusta" },
    { src: "./kuva_3.jpg", alt: "Kuva Tsuchinshan-ATLAS komeetasta" },
    { src: "./kuva_4.jpg", alt: "ESP / Gran Canaria. Kuva auringonlaskusta hiekkarannalla" },
    { src: "./kuva_5.jpg", alt: "GR / Crete. Kuva merelle päin" },
    { src: "./kuva_6.jpg", alt: "GR / Crete. Kuva majakasta" },
    { src: "./kuva_7.jpg", alt: "GR / Crete. Kuva aallokosta ja majakasta" },
    { src: "./kuva_8.jpg", alt: "GR / Crete. Kuva veneistä" },
    { src: "./kuva_9.jpg", alt: "Kuva kasvista Kaisaniemen kasvitieteellisessä puutarhassa" },
    { src: "./kuva_10.jpg", alt: "Kuva kasvaista Kaisaniemen kasvitieteellisessä puutarhassa" },
    { src: "./kuva_11.jpg", alt: "ESP / Gran Canaria. Kuva pienlentokoneesta" },
    { src: "./kuva_12.jpg", alt: "Kaisaniemen kasvitieteellinen puutarha" },
    { src: "./kuva_13.jpg", alt: "Valkeisenlampi" },
    { src: "./kuva_14.jpg", alt: "Näkymä Neulamäen näköalatornista" },
    { src: "./kuva_15.jpg", alt: "Valkeisenlampi" },
    { src: "./kuva_16.jpg", alt: "GR / Crete. Kuva ulkokissasta" },
    { src: "./kuva_17.jpg", alt: "Kaisaniemen kasvitieteellinen puutarha" },
    { src: "./kuva_18.jpg", alt: "FIN / Tampere, Vapriikki" },
    { src: "./kuva_19.jpg", alt: "FIN / Tampere, Vapriikki" },
    { src: "./kuva_20.jpg", alt: "FIN / Tampere, Vapriikki" },
    { src: "./kuva_21.jpg", alt: "Kuva kebabannoksesta" },
    { src: "./kuva_22.jpg", alt: "Kuba Friends & Brgrs -annoksesta" },
    { src: "./kuva_23.jpg", alt: "Kuva ravintolan jälkiruoasta" }
];

const GalleriaV2: React.FC = () => {
    const [sivu, setSivu] = useState<number>(1);
    const kuviaSivulla = 4;
    const sivutYhteensa = Math.ceil(kuvat.length / kuviaSivulla);
    const alkuIndex = (sivu - 1) * kuviaSivulla; //Määrittelee ensimmäisen sivun
    const uusinKuva = kuvat.slice(alkuIndex, alkuIndex + kuviaSivulla); //Määrittelee tämänhetkisen kuvan

    //Siirrytään galleriassa seuraavalle sivulle
    const seuraavaSivu = () => {
        if (sivu < sivutYhteensa) setSivu(sivu + 1);
    };

    //Siirrytään galleriassa edelliselle sivulle
    const edellinenSivu = () => {
        if (sivu > 1) setSivu(sivu - 1);
    };

    return (
        //Otsikon tyylitys
        <div className="container-fluid px-5">
            <div className="row">
                <div className="col">
                    <div className="bg-primary text-white py-3 mb-4 text-center">
                        <h1>Kuvagalleria</h1>
                    </div>
                </div>
            </div>

            {/*Kuvien tyylitys. Jos ollaan viimeiselle sivulla, keskitetään sivulla olevat 3 kuvaa.*/}
            <div className={`row g-4 ${sivu === sivutYhteensa && uusinKuva.length < 4 ? "justify-content-center" : ""}`}>
                {uusinKuva.map((kuva, i) => (
                    <div key={i} className="col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm align-items-center justify-content-center">
                            <img
                                src={kuva.src}
                                alt={kuva.alt}
                                className="img-fluid border rounded"
                                style={{ height: "500px", width: "100%", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/*Navigointinappien tyylitys*/}
            <div className="row mt-4">
                <div className="col text-center">
                    <div className="btn-group">
                        <button className="btn btn-primary" onClick={edellinenSivu} disabled={sivu === 1}>
                            Edellinen
                        </button>
                        <span className="btn btn-secondary">{sivu} / {sivutYhteensa}</span>
                        <button className="btn btn-primary" onClick={seuraavaSivu} disabled={sivu === sivutYhteensa}>
                            Seuraava
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleriaV2;