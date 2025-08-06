import {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import "./tabel.css";
import {ref, onValue} from "firebase/database"
import {db} from "../../firebase-config";
import YellowContentBox from "../pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import {Link} from "react-router-dom";



function DiscTabel() {
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);
    const [filteredDiscs, setFilteredDiscs] = useState([]);
    const [bmm, setBmm] = useState('');
    const [reusable, setReusable] = useState('');
    const [stem, setStem] = useState('');
    const [country, setCountry] = useState('');


    useEffect(() => {
        onValue(ref(db, 'discs/'), (snapshot) => {
            let discs = [];
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((disk) => {
                    return discs = [...discs, disk];
                });
            }
            setMenstrualDiscs(discs);
            setFilteredDiscs(discs);
        });
    }, []);


    const noData = (<div className="tabel-no-data">
        Met deze specificaties zijn er geen disks gevonden. <br/>
        Probeer eens een ander antwoord te geven. Of <Link to="" onClick={resetFilters}>wis al je antwoorden</Link>.
    </div>);

    const columns = [
        // {
        //     name: 'afbeelding',
        //     selector: row => row.image,
        //     sortable: true,
        //     compact: true,
        //     width: "80px",
        //     cell: row => {
        //         if (row.image) {
        //             return <img height="53px" width="83px" alt={row.image.fileName}
        //                         src={row.image.url}/>
        //         } else {
        //             return <img height="53px" width="83px" alt="disc"
        //                         src="https://cupkiezer.nl/wp-content/uploads/2018/10/Belladot_evelina_small_m_box_pouch.jpg"/>
        //         }
        //     }
        // },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            compact: false,
            wrap: true,
            cell: (row) => <a href={row.linkToStore} target="_blank"
                              rel="noopener noreferrer">{row.name} {row.model}</a>,
        },

        {
            name: 'Breedte',
            selector: row => row.width + "mm",
            sortable: true,
            compact: true,
            maxWidth: "50px",
        },
        {
            name: 'Inhoud',
            selector: row => row.capacity + "ml",
            sortable: true,
            compact: true,
            maxWidth: "50px",

        },

        {
            name: 'Hardheid',
            selector: row => row.firmness.toLowerCase(),
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",
        },
        {
            name: 'Materiaal',
            selector: row => row.material.toLowerCase(),
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",

        },
        {
            name: 'Vorm',
            selector: row => row.shape.toLowerCase(),
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",
        },

        {
            name: 'Design',
            selector: row => row.designFeature,
            sortable: true,
            compact: true,
            wrap: true,
        },

    ];
    const data = filteredDiscs;

    useEffect(() => {
        let discList = menstrualDiscs;

        switch (bmm) {
            case "hoge-bmm":
                discList = discList.filter(disc => disc.width >= 68);
                break;
            case "gem-bmm":
                discList = discList.filter(disc => disc.width > 62 && disc.width < 70);
                break;
            case "lage-bmm":
                discList = discList.filter(disc => disc.width < 64);
                break;
            case "geen-bmm":
                discList = discList.filter(disc => disc.width > 53);
                break;
            default:
        }
        switch (reusable) {
            case "ja-hbb":
                discList = discList.filter(disc => disc.reusable === true)
                break;
            case "nee-hbb":
                discList = discList.filter(disc => disc.reusable === false)
                break;
            case "geen-hbb":
            default:
        }
        switch (stem) {
            case "ja-steel":
                discList = discList.filter(disc => disc.hasStem === true)
                break;
            case "nee-steel":
                break;
            default:
        }
        switch (country) {
            case "ja-nl":
                discList = discList.filter(disc => disc.availableInNL === true)
                break;
            case "nee-nl":
                break;
            default:
        }
        setFilteredDiscs(discList);

    }, [bmm, reusable, stem, menstrualDiscs, country])

    function handleOptionChange(e) {
        if (e.target.name === "bmm") {
            setBmm(e.target.value);
        } else if (e.target.name === "herbruikbaar") {
            setReusable(e.target.value);
        } else if (e.target.name === "steel") {
            setStem(e.target.value);
        } else if (e.target.name === "land") {
            setCountry(e.target.value);
        }
    }

    function resetFilters() {
        setFilteredDiscs(menstrualDiscs);
        setBmm('');
        setReusable('');
        setStem('');
        setCountry('');
    }

    return (

        <div className="tabel">
            <YellowContentBox>
                <h2>Menstruatiedisks vergelijken</h2>
                <p>Onder de tabel vind je de legenda. De tabel is het best zichtbaar op een breed scherm.</p>

                <h4 className="legend">Baarmoedermondhoogte (bepaalt de breedte van de disk)</h4>
                <form>
                    <label>
                        <input type="radio" value="hoge-bmm" name="bmm"
                               onChange={handleOptionChange} checked={bmm === "hoge-bmm"}/>
                        Disks voor een hoge bmm. <span className="small-txt">Hoger dan 5,5cm.</span>
                    </label><br/>
                    <label>
                        <input type="radio" value="gem-bmm" name="bmm" onChange={handleOptionChange}
                               checked={bmm === "gem-bmm"}/>
                        Disks voor een gemiddelde bmm. <span className="small-txt">Zo'n 4,5cm - 5,5cm hoog.</span>
                    </label><br/>
                    <label>
                        <input type="radio" value="lage-bmm" name="bmm"
                               onChange={handleOptionChange} checked={bmm === "lage-bmm"}/>
                        Disks voor een lage bmm. <span className="small-txt">Hij zit lager dan 4,5cm.</span>
                    </label><br/>
                    <label>
                        <input type="radio" value="geen-bmm" name="bmm"
                               onChange={handleOptionChange} checked={bmm === "geen-bmm"}/>
                        Ik weet het niet, geef me gemiddelde disks.
                    </label><br/>

                    <h4 className="legend">Herbruikbaar?</h4>
                    <label><input type="radio" value="ja-hbb" name="herbruikbaar" onChange={handleOptionChange}
                                  checked={reusable === "ja-hbb"}/>
                        Herbruikbare disks. <span className="small-txt">Die gaat tot 10 jaar mee, vanaf €20.</span></label><br/>
                    <label><input type="radio" value="nee-hbb" name="herbruikbaar" onChange={handleOptionChange}
                                  checked={reusable === "nee-hbb"}/>
                        Wegwerp disks. <span className="small-txt">Die kan je 1x gebruiken, rond de €4 per stuk.</span></label><br/>
                    <label><input type="radio" value="geen-hbb" name="herbruikbaar" onChange={handleOptionChange}
                                  checked={reusable === "geen-hbb"}/>
                        Maakt me niet uit, laat me alle opties zien.</label>

                    <h4 className="legend">Steeltje of lusje?</h4>
                    <label> <input type="radio" value="ja-steel" name="steel" onChange={handleOptionChange}
                                   checked={stem === "ja-steel"}/>
                        Disks met steeltje of uitneem-gleuf. </label><br/>
                    <label><input type="radio" value="nee-steel" name="steel" onChange={handleOptionChange}
                                  checked={stem === "nee-steel"}/>
                        Het maakt me niet uit, laat me alle opties zien.</label><br/>

                    <h4 className="legend">Nederlandse webshop?</h4>
                    <label> <input type="radio" value="ja-nl" name="land" onChange={handleOptionChange}
                                   checked={country === "ja-nl"}/>
                        Ik wil alleen disks zien die makkelijk in NL te verkrijgen zijn.</label><br/>
                    <label><input type="radio" value="nee-nl" name="land" onChange={handleOptionChange}
                                  checked={country === "nee-nl"}/>
                        Het maakt me niet uit, laat me alle opties zien.</label><br/>

                </form>
                <br/>

                <div className="discsTabel">
                    <DataTable
                        columns={columns}
                        data={data}
                        striped={true}
                        highlightOnHover={true}
                        dense={true}
                        persistTableHead={true}
                        noDataComponent={noData}
                    />
                </div>
                <button type="button" onClick={resetFilters} className="reset-btn">Reset tabel</button>

            </YellowContentBox>
        </div>
    );
}

export default DiscTabel;