type CertificateProps = { params: { tahun: string } };

export default function CertificateTahun(props: CertificateProps){
    const { params } = props

    return(
        <p>HALAMAN SERTIFICATE {params.tahun}</p>
    );
}