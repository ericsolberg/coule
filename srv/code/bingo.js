module.exports = async function (svc, msg) {

    const { something } = msg.data;

    const { Bar } = svc.entities;

    // Ensure Bar entity is defined
    if (!Bar) {
        return;
    }

    // Insert a new record into the Bar table with an empty string for the message field
    await INSERT.into(Bar).columns('ID', 'message').values(cds.utils.uuid(), something);
};
