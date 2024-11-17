export default function Footer() {
    const year = (new Date().getFullYear().toLocaleString()).split(',');

    return (
        <div className="p-3 bg-light-container text-sm flex justify-center items-center">
            Copyright © {year} | <strong>&nbsp;Prioritx</strong>
        </div>
    )
}
