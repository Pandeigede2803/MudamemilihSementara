import React from "react";

export default function MapIndonesia2() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="map2img" id="map-aceh" style={{ opacity: 0 }}>
          <div>Aceh</div>
        </div>
        <div className="map2img" id="map-sumut" style={{ opacity: 0 }}>
          <div>Sumatera Utara</div>
        </div>
        <div className="map2img" id="map-riau" style={{ opacity: 0 }}>
          <div>Riau</div>
        </div>
        <div className="map2img" id="map-sumbar" style={{ opacity: 0 }}>
          <div>Sumatera Barat</div>
        </div>
        <div className="map2img" id="map-jambi" style={{ opacity: 0 }}>
          <div>Jambi</div>
        </div>
        <div className="map2img" id="map-bengkulu" style={{ opacity: 0 }}>
          <div>Bengkulu</div>
        </div>
        <div className="map2img" id="map-sumsel" style={{ opacity: 0 }}>
          <div>Sumatera Selatan</div>
        </div>
        <div className="map2img" id="map-lampung" style={{ opacity: 0 }}>
          <div>Lampung</div>
        </div>
        <div className="map2img" id="map-babel" style={{ opacity: 0 }}>
          <div>Bangka Belitung</div>
        </div>
        <div className="map2img" id="map-kepriau" style={{ opacity: 0 }}>
          <div>Kepulauan Riau</div>
        </div>
        <div className="map2img" id="map-kalbar" style={{ opacity: 0 }}>
          <div>Kalimantan Barat</div>
        </div>
        <div className="map2img" id="map-kalteng" style={{ opacity: 0 }}>
          <div>Kalimantan Tengah</div>
        </div>
        <div className="map2img" id="map-kalsel" style={{ opacity: 0 }}>
          <div>Kalimantan Selatan</div>
        </div>
        <div className="map2img" id="map-kaltim" style={{ opacity: 0 }}>
          <div>Kalimantan Timur</div>
        </div>
        <div className="map2img" id="map-kalut" style={{ opacity: 0 }}>
          <div>Kalimantan Utara</div>
        </div>
        <div className="map2img" id="map-sulut" style={{ opacity: 0 }}>
          <div>Sulawesi Utara</div>
        </div>
        <div className="map2img" id="map-gorontalo" style={{ opacity: 0 }}>
          <div>Gorontalo</div>
        </div>
        <div className="map2img" id="map-sulteng" style={{ opacity: 0 }}>
          <div>Sulawesi Tengah</div>
        </div>
        <div className="map2img" id="map-sulbar" style={{ opacity: 0 }}>
          <div>Sulawesi Barat</div>
        </div>
        <div className="map2img" id="map-sulsel" style={{ opacity: 0 }}>
          <div>Sulawesi Selatan</div>
        </div>
        <div className="map2img" id="map-sultenggara" style={{ opacity: 0 }}>
          <div>Sulawesi Tenggara</div>
        </div>
        <div className="map2img" id="map-malukuutara" style={{ opacity: 0 }}>
          <div>Maluku Utara</div>
        </div>
        <div className="map2img" id="map-maluku" style={{ opacity: 0 }}>
          <div>Maluku</div>
        </div>
        <div className="map2img" id="map-papuabarat" style={{ opacity: 0 }}>
          <div>Papua Barat</div>
        </div>
        <div className="map2img" id="map-papua" style={{ opacity: 0 }}>
          <div>Papua</div>
        </div>
        <div className="map2img" id="map-banten" style={{ opacity: 0 }}>
          <div>Banten</div>
        </div>
        <div className="map2img" id="map-jabar" style={{ opacity: 0 }}>
          <div>Jawa Barat</div>
        </div>
        <div className="map2img" id="map-jateng" style={{ opacity: 0 }}>
          <div>Jawa Tengah</div>
        </div>
        <div className="map2img" id="map-jogja" style={{ opacity: 0 }}>
          <div>Yogyakarta</div>
        </div>
        <div className="map2img" id="map-jatim" style={{ opacity: 0 }}>
          <div>Jawa Timur</div>
        </div>
        <div className="map2img" id="map-bali" style={{ opacity: 0 }}>
          <div>Bali</div>
        </div>
        <div className="map2img" id="map-ntb" style={{ opacity: 0 }}>
          <div>Nusa Tenggara Barat</div>
        </div>
        <div className="map2img" id="map-ntt" style={{ opacity: 0 }}>
          <div>Nusa Tenggara Timur</div>
        </div>
        <div className="map2img" id="map-jakarta" style={{ opacity: 0 }}>
          <div>Jakarta</div>
        </div>
        <img src="/maps/maps.png" alt />
        <img
          src="/maps/space.gif"
          alt
          useMap="#indonesia"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 730,
            height: 269,
          }}
        />
        <map name="indonesia">
          <area
            shape="poly"
            className="map2area"
            coords="0,0,11,48,12,53,21,60,26,62,34,67,48,61,51,58,48,47,48,39,53,27,51,21,45,14,39,11,27,10,21,10,7,1"
            href="/anggota/index/propinsi/1"
            alt="map-aceh"
          />
          <area
            shape="poly"
            className="map2area"
            coords="55,29,61,35,85,53,86,65,87,69,82,73,83,79,83,83,75,80,77,85,73,86,68,89,54,105,47,86,41,83,32,73,35,67,51,58,49,49,48,40,53,29"
            href="/anggota/index/propinsi/2"
            alt="map-sumut"
          />
          <area
            shape="poly"
            className="map2area"
            coords="83,84,87,88,92,90,92,96,96,103,106,109,109,111,112,111,117,111,119,111,127,110,129,109,135,107,141,92,130,79,122,72,114,66,105,60,94,58,86,57,85,69,82,74"
            href="/anggota/index/propinsi/4"
            alt="map-riau"
          />
          <area
            shape="poly"
            className="map2area"
            coords="54,106,60,120,67,127,72,131,86,147,96,133,103,129,97,123,110,112,96,104,93,98,91,90,85,86,79,82,74,86,66,91"
            href="/anggota/index/propinsi/3"
            alt="map-sumbar"
          />
          <area
            shape="poly"
            className="map2area"
            coords="97,122,104,129,106,135,113,139,117,137,123,136,129,132,137,129,143,123,150,121,150,110,136,107,119,111,111,111"
            href="/anggota/index/propinsi/5"
            alt="map-jambi"
          />
          <area
            shape="poly"
            className="map2area"
            coords="104,129,97,133,112,178,117,182,139,170,136,163,131,162,125,156,125,153,129,149,115,138,111,138"
            href="/anggota/index/propinsi/7"
            alt="map-bengkulu"
          />
          <area
            shape="poly"
            className="map2area"
            coords="115,138,151,121,158,127,169,135,177,145,173,159,164,153,160,160,152,163,148,166,148,172,139,169,131,161,125,156,127,148"
            href="/anggota/index/propinsi/6"
            alt="map-sumsel"
          />
          <area
            shape="poly"
            className="map2area"
            coords="138,173,154,188,171,186,174,164,174,159,164,154,159,161,153,163,149,166,147,172,143,170,140,171"
            href="/anggota/index/propinsi/8"
            alt="map-lampung"
          />
          <area
            shape="poly"
            className="map2area"
            coords="178,145,213,146,215,136,186,131,182,123,168,114,160,122,157,125"
            href="/anggota/index/propinsi/9"
            alt="map-babel"
          />
          <area
            shape="poly"
            className="map2area"
            coords="129,77,171,39,206,16,229,56,205,81,150,109,144,99,141,94,138,88,133,81"
            href="/anggota/index/propinsi/10"
            alt="map-kepriau"
          />
          <area
            shape="poly"
            className="map2area"
            coords="233,61,247,79,256,77,268,77,275,71,290,72,306,69,301,81,294,90,293,95,288,102,268,109,254,120,257,136,250,143,241,142,235,117,220,122,223,92,220,78,224,66"
            href="/anggota/index/propinsi/20"
            alt="map-kalbar"
          />
          <area
            shape="poly"
            className="map2area"
            coords="252,143,265,143,267,154,280,150,289,146,295,150,306,149,319,132,327,116,326,106,322,97,317,91,319,84,316,82,309,84,299,84,289,96,292,97,284,103,277,105,268,110,258,117,254,121,256,134,256,138"
            href="/anggota/index/propinsi/21"
            alt="map-kalteng"
          />
          <area
            shape="poly"
            className="map2area"
            coords="327,116,332,132,346,129,343,142,341,155,334,160,332,153,315,161,310,157,309,147"
            href="/anggota/index/propinsi/22"
            alt="map-kalsel"
          />
          <area
            shape="poly"
            className="map2area"
            coords="306,69,324,78,330,71,335,65,339,56,347,53,359,55,367,56,380,59,366,64,383,79,378,84,363,85,359,93,364,106,357,110,349,119,344,124,346,129,332,132,328,117,326,109,325,104,322,98,317,90,320,85,312,83,303,84,298,85"
            href="/anggota/index/propinsi/23"
            alt="map-kaltim"
          />
          <area
            shape="poly"
            className="map2area"
            coords="310,70,317,53,321,41,325,33,332,23,366,26,367,34,364,44,361,50,365,55,352,54,347,53,341,56,338,59,332,69,324,79,317,74"
            href="/anggota/index/propinsi/37"
            alt="map-kalut"
          />
          <area
            shape="poly"
            className="map2area"
            coords="446,78,461,79,473,65,481,33,505,21,509,37,491,57,484,73,471,87,458,93,453,90"
            href="/anggota/index/propinsi/24"
            alt="map-sulut"
          />
          <area
            shape="poly"
            className="map2area"
            coords="446,78,431,76,415,83,419,86,432,89,455,92"
            href="/anggota/index/propinsi/28"
            alt="map-gorontalo"
          />
          <area
            shape="poly"
            className="map2area"
            coords="428,77,414,72,400,78,390,94,389,108,390,116,394,124,395,126,402,124,408,128,417,131,425,138,420,141,435,145,432,129,430,126,436,121,444,126,457,128,463,125,457,112,453,99,432,97,425,98,419,105,411,115,404,105,402,97,404,91,417,88,421,87,415,83"
            href="/anggota/index/propinsi/25"
            alt="map-sulteng"
          />
          <area
            shape="poly"
            className="map2area"
            coords="389,109,386,113,382,132,377,140,381,150,388,149,392,143,393,138,393,130,395,126,392,120,391,117"
            href="/anggota/index/propinsi/29"
            alt="map-sulbar"
          />
          <area
            shape="poly"
            className="map2area"
            coords="420,142,412,139,406,136,403,142,403,153,404,165,409,187,411,212,398,185,385,179,386,167,387,149,394,140,393,130,398,126,404,125,412,130,421,133,424,138"
            href="/anggota/index/propinsi/26"
            alt="map-sulsel"
          />
          <area
            shape="poly"
            className="map2area"
            coords="414,140,410,149,417,158,426,181,444,188,468,193,458,164,451,149,434,145"
            href="/anggota/index/propinsi/27"
            alt="map-sultenggara"
          />
          <area
            shape="poly"
            className="map2area"
            coords="464,117,465,126,504,135,538,123,561,83,592,42,536,47,514,56,508,86,504,100,498,111,484,118"
            href="/anggota/index/propinsi/31"
            alt="map-malukuutara"
          />
          <area
            shape="poly"
            className="map2area"
            coords="488,140,518,138,546,136,581,147,596,167,630,174,638,207,593,234,554,235,520,237,487,226,482,213"
            href="/anggota/index/propinsi/30"
            alt="map-maluku"
          />
          <area
            shape="poly"
            className="map2area"
            coords="623,101,574,91,558,96,549,113,554,132,591,149,598,162,620,165,632,161,638,155,622,148,627,142"
            href="/anggota/index/propinsi/32"
            alt="map-papuabarat"
          />
          <area
            shape="poly"
            className="map2area"
            coords="626,101,662,106,686,114,718,130,730,132,728,239,675,229,685,207,668,182,645,172,633,166,631,161,636,155,622,149,627,142,625,126,624,111,623,102"
            href="/anggota/index/propinsi/33"
            alt="map-papua"
          />
          <area
            shape="poly"
            className="map2area"
            coords="159,200,165,205,181,206,183,202,182,196,185,195,188,195,185,191,184,188,175,186,167,194,160,197"
            href="/anggota/index/propinsi/16"
            alt="map-banten"
          />
          <area
            shape="poly"
            className="map2area"
            coords="182,205,181,213,191,215,201,215,212,220,222,217,219,211,215,208,220,207,224,201,218,195,209,191,193,187,191,192,189,194,185,195,182,197"
            href="/anggota/index/propinsi/12"
            alt="map-jabar"
          />
          <area
            shape="poly"
            className="map2area"
            coords="225,201,244,201,250,193,265,197,264,207,259,211,260,219,253,224,252,219,249,218,244,214,240,216,238,219,221,216,219,210,216,208,222,204"
            href="/anggota/index/propinsi/13"
            alt="map-jateng"
          />
          <area
            shape="poly"
            className="map2area"
            coords="237,218,243,215,251,218,254,224"
            href="/anggota/index/propinsi/14"
            alt="map-jogja"
          />
          <area
            shape="poly"
            className="map2area"
            coords="267,199,352,200,312,218,306,226,309,230,312,232,307,234,290,229,267,228,254,225,260,219,259,214,260,209,264,207,264,202"
            href="/anggota/index/propinsi/15"
            alt="map-jatim"
          />
          <area
            shape="poly"
            className="map2area"
            coords="316,232,315,229,317,233,322,237,329,233,332,224,325,221,316,220,311,222,309,226"
            href="/anggota/index/propinsi/17"
            alt="map-bali"
          />
          <area
            shape="poly"
            className="map2area"
            coords="333,237,367,239,387,235,389,221,366,221,339,219,334,226,332,232,328,237"
            href="/anggota/index/propinsi/18"
            alt="map-ntb"
          />
          <area
            shape="poly"
            className="map2area"
            coords="391,228,389,236,373,245,389,257,432,267,477,264,481,222,455,217,427,223,403,220,396,220"
            href="/anggota/index/propinsi/19"
            alt="map-ntt"
          />
          <area
            shape="poly"
            className="map2area"
            coords="186,190,187,193,190,194,191,193,192,188,184,187"
            href="/anggota/index/propinsi/11"
            alt="map-jakarta"
          />
        </map>
      </div>
    </div>
  );
}
