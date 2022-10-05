export const Fetch = (url, loading) => {
    loading = true
    fetch(url)
        .then(res => res.json())
        .then(res => {
            return res.data
        }
        )
}