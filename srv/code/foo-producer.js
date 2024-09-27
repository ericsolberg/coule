/**
 * 
 * @On(event = { "READ" }, entity = "couleService.Foo")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request, svc) {
    const { Foo } = svc.entities;

    // Fetch the first record from Foo table
    const fooRecord = await SELECT.one.from(Foo).orderBy({ ref: ['ID'] });

    if (fooRecord) {
        // Increment the messageCount field
        fooRecord.messageCount = (fooRecord.messageCount || 0) + 1;

        // Update the record in the Foo table
        await UPDATE(Foo).set({ messageCount: fooRecord.messageCount }).where({ ID: fooRecord.ID });

        // Log a message indicating the count was updated
        const messaging = await cds.connect.to("messaging");
        const msg=`Message count updated to ${fooRecord.messageCount} for record ID ${fooRecord.ID}`
        console.log(`Emitting: ${msg}`);
        return messaging.emit ('bingo', { something: msg });
    }
};