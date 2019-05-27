
export const getBenches = () => (
    $.ajax({
        method: "GET",
        url: "api/benches",
        error: (err) => console.log(err)
    })
);