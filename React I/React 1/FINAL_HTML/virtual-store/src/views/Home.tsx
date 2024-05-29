// Home.tsx
import React from 'react';
import styles from './Home.module.css';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {<>
       <header className={styles.header}>
        <div className={styles.headerContainer}>
          <a href="/" className={styles.headerLogo}>
            <img
              className={styles.headerLogoImg}
              src="/tiendamia-logo.svg"
              alt="Logo store"
            />
          </a>
          <form className={styles.headerForm}>
            <input
              className={styles.headerInput}
              type="text"
              placeholder="Search"
              id="search"
            />
          </form>
          <ul className={styles.headerSocial}>
            <li id="facebook" className={styles.headerLi}>
              <a className={styles.headerA} href="https://facebook.com">
                <img
                  className={styles.headerSocialImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/RJREFUaEPtmVuoVlUQx3//fMjESMkkSyi1XrIgUjSILlCQiBVKFIRgYFAaYWqJogVdoVCLKEXMCkQwhIioECqMMPNF8ckkugndMwpT8qlpj+wT3zlnX2avvT/kgPN2zl5z+a2Zvfas+cQIF43w+DkLcKYz2FkGzGwyMAe4GbgF8L975Yfs/59mz/cAuyX91AV8KwAzuwxYAcwFrmgY0FfAh8AGSQ6XJEkAZjYGWAesSfI6XOkJSc+m2GoMYGZ3AZuBSSkOK3SOAoslfdLEbhgg3/U3gHubOEhYu0XSQ1G9EICZTQA+Aq6NGm65zl/2eZJO1tmpBTCz84C9wHV1xjp+7hs2R9K/VXYjALuAuzsKzo/ObwAPajxwDnB1he31WRYeTwYws0eBl1oG7zv5NHBI0omhtszsSsCP1DK5Q9L7ZQ9LM2Bmfsr4bnkJpYgH+4Ckt6uUzexi4OeKNf5sqqRTRWuqALYDC1Miz3VuixyJAQA3t07Sc2GAPK1H8hpNYXhPkn8vaiUI8CdwqaR/hhoszICZvQYsrfWeWLe9akEAV3lY0qZagPzY/A0Y2wJgbNkZbmZP5aU5taH9g5JmRAA89e82NN67/Jiki4r0zcx7p+db2PYyGtTFDishM9sILG/h5Kiky0sADrT8IC6UtKPXdhHAZ8CNfQL4DiiEC/rbKGllHcDvgPc+qVKVge8Bv0OkygeS5tUBWKr1XK+fAIclTR/JAMclXVAH8HeDI/RA1qfMbJMxM/Pe3y9IETkpadDxXvQSe/8TPaO7AHgZWBaJ3nszSYPu3kUAX2RTg+uDBrsA2A3cHvS3T9INdSX0DjA/aLALgG+BKUF/uyTdUwfgY5INQYOtAMzsXKCwTS7xv0zSK3UAdReMXn2/iDw4xNkpSfuLAjAzL83RPc/8m/BWcLN82RRJ/i35X8q60a+BaQ0M9y7t13fgS0lXDY2pDGAtkDRoAvoF8JikYaVdBnA+8GvidbIfAH8Bl4QvNJ4mM1sPDGqcgiXVD4BnsvHKk0X+q+7EE4HDwIXBwAeWdQ3wI3CNJL9WDpPKuZCZ3Qp8fAYBfH50k6TPy2KIDLZeAFY1gOgyA6XTiIF4IgCjgJ0NpnNdAfgg2edKle19LUD+QjuEtxh3BjLRBUAoeI8lBDAQdPaLzJvA/TUQbQFelfRIYKNOL2kEkGdjAbANGFfiJBXARzmLJHl3GpbGADmEzzP9q3hfgacUgNezpm51tvN/hCPPFyYB9JSUt8GrfecA7yxdogA+/N0KvJj9IvNL08DDp1DEcD7NmwXMzjvGJUV6ZuajQR+t+MWk9GyP+OwUoInDrte2KqGug0mxdxYgZde61PkPoFiDQMAu40AAAAAASUVORK5CYII="
                  alt="Facebook"
                />
              </a>
            </li>
            <li id="instagram" className={styles.headerLi}>
              <a className={styles.headerA} href="https://instagram.com">
                <img
                  className={styles.headerSocialImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABJdJREFUaEPtmWmolkUUx3//VtoLsj2zpLCiD+20SLRQtEB9iII+tECIVGYbBaIVpQQtJmG0QLRQEEEUpBDRIhUSCvZBW2xTW6gwK0zLD9ppzmVeee69z/PMzH3ve28X7oH3yztnzsx/zn/OMo8Y46Ixvn/GAYy2B8c9MOY8YGaHANcAlwFHAYd3CeJ74DtgMfCypF9K7GVTyMx2A+YCM4EdSxYp0N0GPA7cK+mfnHlZAMzsQuBZ4Igco8Ogsw64QdIHKVtJAGZ2NvBRylCPxs+R9GGb7VYAkTZfjODJD9zrWuC4NjqlADwBzOjR6eaanS/pziblRgBm5nz3E+i1PA28A5wOTAP2q1lwoqQf6jbSBuAm4Mke736xJA/HfWJm84BZNWtOl/RMKYDngweu7wLAZuBrYC9gcoOdfvQwsyuAN2p0n5N0YykAv/1TCwH8GL3mJ7uycrL7BJqcCZwH3FWx6UnsBEkbowfeDRHv/Jo1l0g6txSAx+KJBQDmSpqT0jez40MGfwk4Keq6p14BzgJ8rE7WSjqyFMDvDReqzs4tkvrdFzPboRJ+10n6tzrRzBbErJ7C7OMbJO1fCsByLAMPSLqvQhfnu9+dq4Bj4v9fhnj+GvCCpDUV3WWhBjo1Y52NkpyGg6Q2CpmZ1zpbMww7hydL6tM1s8sjxz1718mScKkfk7Qo6jvYz4FdEmttkuTBIA9ANJ7jgRnBtQujvnP0xYyL7/XNdZ24bmavAlcnAPwlae9sAGa2O+CXq00c4ARJGyKA+4MTtlMpMXe2JI/57rXpwFPD6gEz2yNQYVPC6GpJUyp8XtUSRQaaWiHp5Ajg6NBffJVYa7OkPUs8sCuwJWF0qSQPfX6Kh8WyI7dP+FuSH1KfmNnPwEEt622TtFMJAA+B3ly0yXJJp1UAfJtxGTv2+nHazHyud3eNIqk24LTVQqlL/Kuk7admZiuAExOgO8OfSDojgvfw+GdqXhGAmIRSHvA1p0haHTfiRVjfxcyQuwOFHonzvER4PzFna7j0O2dTKBpOecDVZkl6KOofHDKvF4AXJTbjzbu3i+vjvDs8NyTmbJHkPfkg6YZCbmy9pAM6VmPvfBtwccOGPIEtkPRe3Py+wKchQ09KACjLAwUecNWHQ8t3TwWEA7oW8NL4WA8yMdu+6YmukzfiGu6NSzIo91uotSb0wgMdm7dL8uIsW8zMaeP0yZEhVaNe2x+aYz3qzAs10eyUfigdPPl5OZ1TxHXMrZFUG2bb7sBy4JTUhgaM/wR4bfSWpM8GzjUzb84fLbTp6sskec88SNoAOGe9uhyqeCnyTUyIBwKerYcqr0u6shRATngb6oZK582U5E88RR5wznmK/z/IJEne4uYDcE0zcz7fPMoIFobQ2/i4lnqZ8xLWnxa74W83+D0oeLnSWNrnPO56afB2N7voYu4FnazdZCMJIFLp0lCv+xPgSHnC+T5Nkj85tkoWgAjCG5AHgVt7/IHDM/qcYf3AUT2Cyicm94q/KnT7iclfAJfG38eS/kidenU82wMlRkdSdxzASJ52cSIb7c3lrD9OoZxT6qXOfxP4g0B5AWE+AAAAAElFTkSuQmCC"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>       
        
        <NavBar />

      </header>
      <Hero />

      <main className={styles.main}>
        <section className={styles.featuredProducts}>
          <h2 className={styles.title}>Featured products</h2>
          <article className={styles.product}>
            <img
              className={styles.productImage}
              src="/path/to/product-image.jpg"
              alt="Product"
            />
            <h3 className={styles.productName}>Product Name</h3>
            <p className={styles.productDescription}>
              This is a brief description of the product.
            </p>
          </article>
          {/* Repite este bloque para otros productos */}
        </section>
      </main>
      <footer className={styles.footer}>
      <Footer />
      </footer>

    </>}
    </div>
  );
}

export default Home;
