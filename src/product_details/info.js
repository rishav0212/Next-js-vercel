import ironOralSpray from "./data/ironoralspray"
import multiVitaminOralSpray from "./data/multivitaminspray"
import * as AZITHROMYCIN from './data/Suspensions/AZITHROMYCIN';
import * as OFLOXACIN from './data/Suspensions/OFLOXACIN';
import * as OFLOXACIN0 from './data/Suspensions/OFLOXACIN + TINIDAZOLE';
import * as OFLOXACIN1 from './data/Suspensions/OFLOXACIN + ORNIDAZOLE';
import * as ROXITHROMYCIN from './data/Suspensions/ROXITHROMYCIN';
import * as OFLOXACIN2 from './data/Suspensions/OFLOXACIN +  NITOZOXANIDE';
import * as OFLOXACIN3 from './data/Suspensions/OFLOXACIN +  METRONIDAZOLE';
import * as PCM4 from './data/Suspensions/PCM    +   CPM    +   PHENYLEPHRINE HCL     +   SODIUM CITRATE     +   MENTHOL';
import * as CPM5 from './data/Suspensions/CPM    +   PCM   +   PHENYLEPHERINE HCL';
import * as CETIRIZINE6 from './data/Suspensions/CETIRIZINE HCL    +   PCM     +   PHENYLEPHERINE HCL';
import * as CETIRIZINE7 from './data/Suspensions/CETIRIZINE DIHCL';
import * as LEVOCETIRIZINE8 from './data/Suspensions/LEVOCETIRIZINE DIHCL';
import * as DICYCLOMINE9 from './data/Suspensions/DICYCLOMINE HCL + PCM';
import * as FEXOFENADINE10 from './data/Suspensions/FEXOFENADINE HCL';
import * as DEXTROMETHORPHAN11 from './data/Suspensions/DEXTROMETHORPHAN HYDROBROMIDE + CHLORPHENIRAMINE MALEATE';
import * as DEFLAZACORT from './data/Suspensions/DEFLAZACORT';
import * as PROMETHAZINE12 from './data/Suspensions/PROMETHAZINE HCL';
import * as PCM13 from './data/Suspensions/PCM     +   PROMETHAZINE HCL';
import * as MEGALDRATE14 from './data/Suspensions/MEGALDRATE   +   SIMETHICON';
import * as OXETACAINE15 from './data/Suspensions/OXETACAINE    +   ALUMINIUM HYDRIXIDE   +   MAGNESIUM HYDROXIDE';
import * as ACTIVATED16 from './data/Suspensions/ACTIVATED DIMETHICON    +   MAGNESIUM HYDRO    +   DRIED ALIMINIUM HYDRO';
import * as AMOXYCILLIN from './data/Syrups/AMOXYCILLIN';
import * as CEFIXIME from './data/Syrups/CEFIXIME';
import * as CEFPODOXIME from './data/Syrups/CEFPODOXIME';
import * as CEFIXIME0 from './data/Syrups/CEFIXIME + OFLOXACIN';
import * as IRONHYDROXIDE1 from './data/Syrups/IRON(III)HYDROXIDE POLYMALTOSE COMPLEX  +  FOLIC ACID';
import * as FERRIC2 from './data/Syrups/FERRIC AMMONIUM CITRATE    +  CYANOCOBALAMIN    +  FOLIC ACID    +  CUPRIC SULPHATE   +  MANGANESE SULPHATE';
import * as MULTIFORMULA3 from './data/Syrups/MULTIFORMULA ………. (FOOD)';
import * as FERROUS4 from './data/Syrups/FERROUS ASCORBATE   +  FOLIC ACID';
import * as FERRIC5 from './data/Syrups/FERRIC AMMONIUM CITRATE    +  FOLIC ACID    +   CYANOCOBALAMINE   +  SORBITOL SOL (70%)  Q.S.';
import * as IRON6 from './data/Syrups/IRON (III) HYDROXIDE POLYMALTOSE';
import * as ENZYME7 from './data/Syrups/ENZYME FORMULA (IN FOOD)';
import * as CALCIUM8 from './data/Syrups/CALCIUM  +  D3   +   B12';
import * as CALCIUM9 from './data/Syrups/CALCIUM CARBONATE  (EQ. TO ELEMENTAL CALCIUM)   +    D3';
import * as FERRIC10 from './data/Syrups/FERRIC AMMONIUM CITRATE  (EQ TO ELEMENTAL IRON )  +   FOLIC ACID    +  CYANOCOBALAMIN';
import * as FERRIC11 from './data/Syrups/FERRIC AMM. CIT.  (EQ. TO ELEMENTAL IRON )  +  CYANOCO.    +  FOLIC ACID   + ZINC SUL.  +  PYRIDOXINE HCL   +  SORBITOL (70%)';
import * as PYRIDOXINE12 from './data/Syrups/PYRIDOXINE HCL   +  NICOTINAMIDE   +  CYANOCOBALAMIN   +   LYSINE HCL';
import * as LYCOPENE13 from './data/Syrups/LYCOPENE FORMULA ……………….(IN FOOD)';
// import * as ALPHA14 from './data/Syrups/ALPHA AMYLASE   ( BACTERIAL 1:800)  +   PAPAIN';
import * as LYSINE15 from './data/Syrups/L-LYSINE   + NICOTINAMIDE     +  D-PANTHENOL   +   RIBO. SOD. PHOS.   +  THIAMINE HCL   + PYRIDOXINE HCL    +  CYANOC. (IN FOOD)';
import * as CYPROHEPTADINE16 from './data/Syrups/CYPROHEPTADINE HCL    +   TRICHOLINE CITRATE';
import * as TRICHOLINE17 from './data/Syrups/TRICHOLINE CITRATE    SORBITOL SOLUTION (70%)  Q.S';
import * as FERROUS18 from './data/Syrups/FERROUS GLUCONATE   (EQ. TO  ELEMENTAL IRON)  +   FOLIC ACID   +  B12     +   CALCIUM LACTATE';
import * as PROTEIN19 from './data/Syrups/PROTEIN FORMULA…………………(IN DRUG)';
import * as DOMPERIDONE from './data/Syrups/DOMPERIDONE';
import * as ONDANSETRON from './data/Syrups/ONDANSETRON';
import * as DIPHENHYDRAMINE20 from './data/Syrups/DIPHENHYDRAMINE + AMONIUM CHLORIDE + SODIUM CITRATE + MENTHOL';
import * as TERBUTALINE21 from './data/Syrups/TERBUTALINE SULPHATE  +  GUAIPHENESIN  +   BROMHEXINE HCL      +  MENTHOL';
import * as TERBUTALINE22 from './data/Syrups/TERBUTALINE SULPHATE      +  GUAIPHENESIN    +  AMBROXOL HCL     +  MENTHOL';
import * as DIPHENHYDRAMINE23 from './data/Syrups/DIPHENHYDRAMINE HCL  +  TERPINE HYDRATE  +   AMMONIUM CHLORIDE  +  SODIUM CITRATE +   MENTHOL';
import * as DEXTROMETHORPHAN24 from './data/Syrups/DEXTROMETHORPHAN HBR  +  PHENYLEPHRINE HCL  +  CPM';
import * as DEXTROMETHORPHAN25 from './data/Syrups/DEXTROMETHORPHAN HBR    +  PHENYLEPHRINE HCL    +  CPM    +  PCM';
import * as DEXTROMETHORPHAN26 from './data/Syrups/DEXTROMETHORPHAN HBR  +   CPM';
import * as CETIRIZINE27 from './data/Syrups/CETIRIZINE DIHCL      +   AMBROXOL HCL';
import * as AMBROXOL28 from './data/Syrups/AMBROXOL HCL   +  GUAIPHENESIN   +  PHENYLEPHERINE HCL   +  CPM  +  MENTHOL';
import * as CPM29 from './data/Syrups/CPM    +  SODIUM CITRATE  +  AMMONIUM CHLORIDE';
import * as DEXTROMETHORPHEN30 from './data/Syrups/DEXTROMETHORPHEN HBR    +  CPM     +   GUAIPHENESIN     +  AMMONIUM CHLORIDE';
import * as DEXTROMETHORPHAN31 from './data/Syrups/DEXTROMETHORPHAN HBR   +  CETIRIZINE HCL     +  PHENYLEPHRINE HCL      +  MENTHOL';
import * as AMBROXOL32 from './data/Syrups/AMBROXOL HCL   +  LEVOCETIRIZINE HCL   +  GUAIPHENESIN    +  PHENYLEPHRINE HCL';
import * as DMR33 from './data/Syrups/DMR    +  AMMONIUM  +  BROMHEXINE   +  MENTHOL';
import * as SODIUM0 from './data/External Preparations/SODIUM CHLORIDE + BENZOLEKONIUM + PHENYLMERCURIC ACETATE';
import * as XYLOMETAZOLINE1 from './data/External Preparations/XYLOMETAZOLINE HCL NASAL DROPS & SPRAY';
import * as POTASSIUM2 from './data/External Preparations/POTASSIUM  NITRATE    +  SODIUM FLUORIDE';
import * as POTASSIUM3 from './data/External Preparations/POTASSIUM  NITRATE';
import * as DICLOFENAC4 from './data/External Preparations/DICLOFENAC DIETHYLAMINE  EQ. DICOFENAC SODIUM';
import * as ADAPALENE5 from './data/External Preparations/ADAPALENE    +  CLINDAMYCIN PHOSPHATE';
import * as CLINDAMYCIN6 from './data/External Preparations/CLINDAMYCIN PHOSPHATE  +  NICOTINAMIDE';
import * as MOMETASONE7 from './data/External Preparations/MOMETASONE FUROATE';
import * as DICLOFENAC8 from './data/External Preparations/DICLOFENAC DIETHYLAMINE   +  METHYL SALICYLATE    +  MENTHOL   +  LINSEED OIL    +  BENZYL ALCOHOL';
import * as CLOBETASOL9 from './data/External Preparations/CLOBETASOL PROPIONATE    +  NEOMYCIN SULPHATE     +  MICONAZOLE NITRATE    +  CHLOROCRESOL';
import * as FLUTICASONE10 from './data/External Preparations/FLUTICASONE  PROPIONATE    +   IMIDUREA';
import * as FLUTICASONE11 from './data/External Preparations/FLUTICASONE  PROPIONATE';
import * as UREA12 from './data/External Preparations/UREA    +  LACTIC ACID   +  PROPYLENE GLYCOL    +  LIQUID PARAFFIN   +  METHYL PARABEN  +  PROPYPARABEN';
import * as BECLOMETHASONE13 from './data/External Preparations/BECLOMETHASONE DIPROPIONATE   +  SALICYLIC ACID';
import * as BECLOMETHASONE14 from './data/External Preparations/BECLOMETHASONE DIPROPIONATE    +  CLOTRIMAZOLE    +  NEOMYCIN SULPHATE    +  CHLOROCRESOL';
import * as CLOTRIMAZOLE15 from './data/External Preparations/CLOTRIMAZOLE   +  BECLOMETHASONE DIPROPIONATE';
import * as OFLOXACIN16 from './data/External Preparations/OFLOXACIN    +  ORNIDAZOLE   +  TERBINAFINE HCL   +  CLOBETASOL PROPIONATE   +  METHYLPARABEN   +  PROPYLPARABEN';
import * as OFLOXACIN17 from './data/External Preparations/OFLOXACIN +  FLUOCINOLONE ACETONIDE   +  CLOTRIMAZOLE    +  CHLOROCRESOL';
import * as ACRIFLAVINE18 from './data/External Preparations/ACRIFLAVINE    +  THYMOL   +  CETRIMIDE';
import * as CLOBETASOL19 from './data/External Preparations/CLOBETASOL PROPIONATE    +  SALICYLIC ACID';
import * as BECLOMETHASONE20 from './data/External Preparations/BECLOMETHASONE DIPROPIONATE   +  KETOCONAZOLE';
import * as PAPAIN21 from './data/External Preparations/PAPAIN    +  UREA';
import * as SODIUM22 from './data/External Preparations/SODIUM HYALURONATE';
import * as HYDROQUINONE23 from './data/External Preparations/HYDROQUINONE+  TERTINOIN +  MOMETASONE FUROATE';
import * as HYDROQUINONE24 from './data/External Preparations/HYDROQUINONE+  TERTINOIN + FLUOCINOLONE';
import * as LIGNOCAINE25 from './data/External Preparations/LIGNOCAINE HCL GEL';
import * as KETOCONAZOLE from './data/External Preparations/KETOCONAZOLE';
import * as PERMETHRIN26 from './data/External Preparations/PERMETHRIN LOTION';
import * as GAMABENZENE27 from './data/External Preparations/GAMABENZENE LOTION';
import * as DICLOFENAC28 from './data/External Preparations/DICLOFENAC DIETHYLAMINE   +  METHYL SALICYLATE    +  MENTHOL   +  LINSEED OIL    +  BENZYL ALCOHOL';
import * as DISODIUM0 from './data/Miscellaneous Products/DISODIUM HYDROGEN CITRATE';
import * as CHLORHEXIDINE1 from './data/Miscellaneous Products/CHLORHEXIDINE GLUCONATE';
import * as GLYCERIN from './data/Miscellaneous Products/GLYCERIN';
import * as SUCRALFATE2 from './data/Miscellaneous Products/SUCRALFATE  +  OXETACAINE';
import * as MILK3 from './data/Miscellaneous Products/MILK OF MAGNESIA    +  LIQUID PARAFFIN';
import * as SUCRALFATE from './data/Miscellaneous Products/SUCRALFATE';
import * as SODIUM4 from './data/Miscellaneous Products/SODIUM PICOSULFATE';
import * as DICLOFENAC5 from './data/Miscellaneous Products/DICLOFENAC DIETHYLAMINE   +  METHYL SALICYLATE    +   MENTHOL +  LINSEED OIL  +  BENZYL ALCOHOL';
import * as CHOLECALCIFEROL6 from './data/Miscellaneous Products/CHOLECALCIFEROL(VITAMIN D3) SHOTS';
import * as ALPHA14 from './data/Syrups/ALPHA AMYLASE BACTERIAL(1-800) + PAPAIN.json'


const info = {
    // 'multivitaminOralSpray': multiVitaminOralSpray,
    // 'ironOralSpray': ironOralSpray,
    // "AZITHROMYCIN": AZITHROMYCIN,
    "ofloxacin": OFLOXACIN,
    "ofloxacin-tinidazole": OFLOXACIN0,
    // "ofloxacin-ornidazole": OFLOXACIN1,
    "roxithromycin": ROXITHROMYCIN,
    "ofloxacin-nitozoxanide": OFLOXACIN2,
    "ofloxacin-metronidazole": OFLOXACIN3,
    "pcm-cpm-phenylephrine-hcl-sodium-citrate-menthol": PCM4,
    "cpm-pcm-phenylepherine-hcl": CPM5,
    "cetirizine-hcl-pcm-phenylepherine-hcl": CETIRIZINE6,
    "cetirizine-dihcl": CETIRIZINE7,
    "levocetirizine-dihcl": LEVOCETIRIZINE8,
    "dicyclomine-hcl-pcm": DICYCLOMINE9,
    "fexofenadine-hcl": FEXOFENADINE10,
    "dextromethorphan-hydrobromide-chlorpheniramine-maleate": DEXTROMETHORPHAN11,
    "deflazacort": DEFLAZACORT,
    "promethazine-hcl": PROMETHAZINE12,
    "pcm-promethazine-hcl": PCM13,
    "megaldrate-simethicon": MEGALDRATE14,
    "oxetacaine-aluminium-hydrixide-magnesium-hydroxide": OXETACAINE15,
    "activated-dimethicon-magnesium-hydro-dried-aliminium-hydro": ACTIVATED16,
    "amoxycillin": AMOXYCILLIN,
    "cefixime": CEFIXIME,
    "cefpodoxime": CEFPODOXIME,
    "cefixime-ofloxacin": CEFIXIME0,
    "iron-iii-hydroxide-polymaltose-complex-folic-acid": IRONHYDROXIDE1,
    "ferric-ammonium-citrate-cyanocobalamin-folic-acid-cupric-sulphate-manganese-sulphate": FERRIC2,
    "multiformula(food)": MULTIFORMULA3,
    "ferrous-ascorbate-folic-acid": FERROUS4,
    "ferric-ammonium-citrate-folic-acid-cyanocobalamine-sorbitol-sol-(70%)-qs": FERRIC5,
    "iron-iii-hydroxide-polymaltose": IRON6,
    "enzyme-formula-in-food": ENZYME7,
    "calcium-d3-b12": CALCIUM8,
    "calcium-carbonate-(eq-to-elemental-calcium)-d3": CALCIUM9,
    "ferric-ammonium-citrate-(eq-to-elemental-iron-)-folic-acid-cyanocobalamin": FERRIC10,
    "ferric-amm-cit-(eq-to-elemental-iron-)-cyanoco-folic-acid-zinc-sul-pyridoxine-hcl-sorbitol": FERRIC11,
    "pyridoxine-hcl-nicotinamide-cyanocobalamin-lysine-hcl": PYRIDOXINE12,
    "lycopene-formula": LYCOPENE13,
    "alpha-amyalase-bacterial-papain": ALPHA14,
    "l-lysine-nicotinamide-d-panthenol-ribo-sod-phos-thiamine-hcl-pyridoxine-hcl-cyanoc-(in-food)": LYSINE15,
    "cyproheptadine-hcl-tricholine-citrate": CYPROHEPTADINE16,
    "tricholine-citrate-sorbitol-solution-(70%)-qs": TRICHOLINE17,
    "ferrous-gluconate-(eq-to-elemental-iron)-folic-acid-b12-calcium-lactate": FERROUS18,
    "protein-formula-in-drug": PROTEIN19,
    "domperidone": DOMPERIDONE,
    "ondansetron": ONDANSETRON,
    "diphenhydramine-amonium-chloride-sodium-citrate-menthol": DIPHENHYDRAMINE20,
    "terbutaline-sulphate-guaiphenesin-bromhexine-hcl-menthol": TERBUTALINE21,
    "terbutaline-sulphate-guaiphenesin-ambroxol-hcl-menthol": TERBUTALINE22,
    "DIPHENHYDRAMINE HCL  +  TERPINE HYDRATE  +   AMMONIUM CHLORIDE  +  SODIUM CITRATE +   MENTHOL": DIPHENHYDRAMINE23,
    "dextromethorphan-hbr-phenylephrine-hcl-cpm": DEXTROMETHORPHAN24,
    "dextromethorphan-hbr-phenylephrine-hcl-cpm-pcm": DEXTROMETHORPHAN25,
    "dextromethorphan-hbr-cpm": DEXTROMETHORPHAN26,
    "cetirizine-dihcl-ambroxol-hcl": CETIRIZINE27,
    "ambroxol-hcl-guaiphenesin-phenylepherine-hcl-cpm-menthol": AMBROXOL28,
    "cpm-sodium-citrate-ammonium-chloride": CPM29,
    "dextromethorphen-hbr-cpm-guaiphenesin-ammonium-chloride": DEXTROMETHORPHEN30,
    "dextromethorphan-hbr-cetirizine-hcl-phenylephrine-hcl-menthol": DEXTROMETHORPHAN31,
    "ambroxol-hcl-levocetirizine-hcl-guaiphenesin-phenylephrine-hcl": AMBROXOL32,
    "dmr-ammonium-bromhexine-menthol": DMR33,
    "sodium-chloride-benzolekonium-phenylmercuric-acetate": SODIUM0,
    "xylometazoline-hcl-nasal-drops-spray": XYLOMETAZOLINE1,
    "potassium-nitrate-sodium-fluoride": POTASSIUM2,
    "potassium-nitrate": POTASSIUM3,
    "diclofenac-diethylamine-eq-dicofenac-sodium": DICLOFENAC4,
    "adapalene-clindamycin-phosphate": ADAPALENE5,
    "clindamycin-phosphate-nicotinamide": CLINDAMYCIN6,
    "mometasone-furoate": MOMETASONE7,
    "diclofenac-diethylamine-methyl-salicylate-menthol-linseed-oil-benzyl-alcohol": DICLOFENAC8,
    "clobetasol-propionate-neomycin-sulphate-miconazole-nitrate-chlorocresol": CLOBETASOL9,
    "fluticasone-propionate-imidurea": FLUTICASONE10,
    "fluticasone-propionate": FLUTICASONE11,
    "urea-lactic-acid-propylene-glycol-liquid-paraffin-methyl-paraben-propyparaben": UREA12,
    "beclomethasone-dipropionate-salicylic-acid": BECLOMETHASONE13,
    "beclomethasone-dipropionate-clotrimazole-neomycin-sulphate-chlorocresol": BECLOMETHASONE14,
    "clotrimazole-beclomethasone-dipropionate": CLOTRIMAZOLE15,
    "ofloxacin-ornidazole-terbinafine-hcl-clobetasol-propionate-methylparaben-propylparaben": OFLOXACIN16,
    "ofloxacin-fluocinolone-acetonide-clotrimazole-chlorocresol": OFLOXACIN17,
    "acriflavine-thymol-cetrimide": ACRIFLAVINE18,
    "clobetasol-propionate-salicylic-acid": CLOBETASOL19,
    "beclomethasone-dipropionate-ketoconazole": BECLOMETHASONE20,
    "papain-urea": PAPAIN21,
    "sodium-hyaluronate": SODIUM22,
    "hydroquinone-tertinoin-mometasone-furoate": HYDROQUINONE23,
    "hydroquinone-tertinoin-fluocinolone": HYDROQUINONE24,
    "lignocaine-hcl-gel": LIGNOCAINE25,
    "ketoconazole": KETOCONAZOLE,
    "permethrin-lotion": PERMETHRIN26,
    "gamabenzene-lotion": GAMABENZENE27,
    "diclofenac-diethylamine-methyl-salicylate-menthol-linseed-oil-benzyl-alcohol": DICLOFENAC28,
    "disodium-hydrogen-citrate": DISODIUM0,
    "chlorhexidine-gluconate": CHLORHEXIDINE1,
    "glycerin": GLYCERIN,
    "sucralfate-oxetacaine": SUCRALFATE2,
    "milk-of-magnesia-liquid-paraffin": MILK3,
    "sucralfate": SUCRALFATE,
    "sodium-picosulfate": SODIUM4,
    "diclofenac-diethylamine-methyl-salicylate-menthol-linseed-oil-benzyl-alcohol": DICLOFENAC5,
    "cholecalciferol(vitamin-d3)-shots": CHOLECALCIFEROL6




}

export default info;