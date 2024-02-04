function deleteJob(id) {
    const result = confirm("Are you sure you want to delete this Job?");
    if (result) {
        fetch(`/delete-job/${id}`, {
            method: "GET"
        }).then(res => {
            if (res.ok) {
                location.reload();
            }
        }).catch(error => {
            console.error('Error deleting job:', error);
        });
    }
}
